'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { useEffect, useRef } from 'react';
import {
  COOKIE_NAME,
  LOCAL_STORAGE_NAME,
  PARAM_NAME,
  STORE_NAME,
} from '@repo/constants/names';
import { loadInitialData } from '@repo/libraries/store';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@repo/utilities/storage';
import {
  SessionValue,
  useStoreSession,
} from '@repo/libraries/zustand/stores/session';
import { generateUUID } from '@repo/utilities/generators';
import { usePathname, useRouter } from 'next/navigation';
import {
  getCookieClient,
  setCookieClient,
} from '@repo/utilities/cookie-client';
import { Role } from '@repo/types/models/enums';
import { WEEK } from '@repo/constants/sizes';
import { ProfileGet } from '@repo/types/models/profile';
import { profileGet } from '@repo/handlers/requests/database/profiles';
import { RoleValue, useStoreRole } from '@repo/libraries/zustand/stores/role';
import {
  AppShellValue,
  useStoreAppShell,
} from '@repo/libraries/zustand/stores/shell';
import { useStoreCategory } from '@repo/libraries/zustand/stores/category';
import { useStoreUserStates } from '@repo/libraries/zustand/stores/user-states';
import { useMediaQuery } from '@mantine/hooks';
import { User } from '@supabase/supabase-js';
import { API_URL } from '@repo/constants/paths';
import { useStorePost } from '@repo/libraries/zustand/stores/post';

export const useSessionStore = (params?: {
  sessionUser: User | null;
  options?: { clientOnly?: boolean };
}) => {
  const { options } = params || {};
  const { clientOnly } = options || {};

  const setSession = useStoreSession((s) => s.setSession);

  useEffect(() => {
    const getUserSession = async () => {
      const localId = getFromLocalStorage(LOCAL_STORAGE_NAME.TEMPID);

      if (!params?.sessionUser) {
        if (!clientOnly) {
          setSession(null);
        }

        if (!localId) {
          const tempId = generateUUID();
          saveToLocalStorage(LOCAL_STORAGE_NAME.TEMPID, tempId);

          if (clientOnly) {
            setSession({ id: tempId } as any);
          }
        } else {
          if (clientOnly) {
            setSession({ id: localId } as any);
          }
        }
      } else {
        setSession(params.sessionUser);

        if (!localId || localId !== params.sessionUser.id) {
          saveToLocalStorage(LOCAL_STORAGE_NAME.TEMPID, params.sessionUser.id);
        }
      }
    };

    getUserSession();
  }, [setSession, clientOnly]);
};

export const useUserRoleStore = () => {
  const router = useRouter();
  const pathname = usePathname();

  const session = useStoreSession((s) => s.session);
  const setRole = useStoreRole((s) => s.setRole);

  useEffect(() => {
    if (!session) return;

    const initializeUserRole = async () => {
      // check for user role in cookies
      let userRole = await getCookieClient<RoleValue>(COOKIE_NAME.USER_ROLE);

      if (userRole) {
        // update expiry in cookies
        setCookieClient(COOKIE_NAME.USER_ROLE, userRole, {
          expiryInSeconds: WEEK,
        });
      } else {
        try {
          // fetch user profile
          const getUserProfile = async () => {
            const { item }: { item: ProfileGet } = await profileGet({
              profileId: session?.id as string,
            });

            return item;
          };

          const userProfile = await getUserProfile();

          if (!userProfile) return;

          if (!userProfile.role) {
            const onboardPath = '/onboarding/role';
            if (pathname.includes(onboardPath)) return;

            // redirect to role onboard page
            const redirectPath = `${onboardPath}?${PARAM_NAME.REDIRECT}=${pathname}`;
            router.replace(redirectPath);
          } else {
            // save in cookies
            setCookieClient(COOKIE_NAME.USER_ROLE, userProfile.role, {
              expiryInSeconds: WEEK,
            });

            userRole = userProfile.role as Role;
          }
        } catch (error) {
          console.error(
            '---> handler error - (get & set profile role):',
            error
          );
        }
      }

      // initialize state
      setRole(userRole);
    };

    initializeUserRole();
  }, [setRole, pathname, router, session]);
};

export const useAppshellStore = (params?: { cookie?: AppShellValue }) => {
  const desktop = useMediaQuery('(min-width: 62em)');

  const appshell = useStoreAppShell((s) => s.appshell);
  const setAppShell = useStoreAppShell((s) => s.setAppShell);

  const cookie: AppShellValue = getCookieClient(COOKIE_NAME.APP_SHELL);

  useEffect(() => {
    // 1. Establish base defaults
    const base = params?.cookie ??
      cookie ?? {
        navbar: true,
        aside: false,
        child: { navbar: true, aside: false },
      };

    // 2. Apply Mobile Constraints (Override if !desktop)
    const resolvedChild = {
      navbar: desktop ? base.child.navbar : false,
      aside: desktop ? base.child.aside : false,
    };

    const resolvedShell = {
      ...base,
      child: resolvedChild,
    };

    setTimeout(() => {
      setCookieClient(COOKIE_NAME.APP_SHELL, resolvedShell, {
        expiryInSeconds: WEEK,
      });
    }, 100);

    setAppShell(resolvedShell);
  }, [desktop, setAppShell]);

  useEffect(() => {
    if (appshell === undefined) return;

    setTimeout(() => {
      setCookieClient(COOKIE_NAME.APP_SHELL, appshell, {
        expiryInSeconds: WEEK,
      });
    }, 100);
  }, [appshell]);
};

export const useUserStatesStore = () => {
  const setUserStates = useStoreUserStates((s) => s.setUserStates);

  useEffect(() => {
    const initializeUserState = () => {
      setUserStates({ editing: true });
    };

    initializeUserState();
  }, [setUserStates]);
};

type LoadStoreConfig<TItems = any, THookReturn = any> = {
  dataStore: (typeof STORE_NAME)[keyof typeof STORE_NAME];
  useStoreHook: () => THookReturn;
  setState: (store: THookReturn, items: TItems[]) => void;
};

export const LOAD_STORES: Record<string, LoadStoreConfig> = {
  categories: {
    dataStore: STORE_NAME.CATEGORIES,
    useStoreHook: useStoreCategory,
    setState: (store, items) => store.setCategories(items),
  },
  posts: {
    dataStore: STORE_NAME.POSTS,
    useStoreHook: useStorePost,
    setState: (store, items) => store.setPosts(items),
  },
} as const;

type LoadStoreKey = keyof typeof LOAD_STORES;

export const useLoadAppData = (options: {
  storesToLoad: Partial<Record<LoadStoreKey, boolean>>;
  clientOnly?: boolean;
}) => {
  const session = useStoreSession((s) => s.session);

  const stores = {
    categories: useStoreCategory(),
    posts: useStorePost(),
  };

  useEffect(() => {
    if (!session?.id) return;

    const syncAll = async () => {
      try {
        // 1. Identify which keys are set to 'true'
        const activeStoreKeys = (
          Object.keys(options.storesToLoad) as LoadStoreKey[]
        ).filter((key) => options.storesToLoad[key]);

        if (activeStoreKeys.length === 0) return;

        // 2. Fetch only the required data
        // Pass the requested stores as a query param so the server can optimize
        const storeQuery = activeStoreKeys.join(',');
        const res = await fetch(
          `${API_URL}/app-data?userId=${session.id}&stores=${storeQuery}`
        );
        if (!res.ok) throw new Error('Failed to fetch app data');

        const fullPayload = await res.json();

        // 2. Process each store in parallel (only the active stores)
        const syncPromises = activeStoreKeys.map(async (key) => {
          const config = LOAD_STORES[key];
          const serverData = fullPayload[key] || [];
          const storeInstance = stores[key as keyof typeof stores];

          if (!config || !storeInstance) return;

          return loadInitialData({
            dataStore: config.dataStore,
            session,
            options: { clientOnly: options.clientOnly },
            serverItems: serverData,
            stateUpdateFunction: (items) =>
              config.setState(storeInstance, items),
          });
        });

        await Promise.all(syncPromises);
      } catch (e) {
        console.error('Data initialization failed:', e);
      }
    };

    syncAll();
  }, [session?.id, JSON.stringify(options.storesToLoad), options.clientOnly]);
};
