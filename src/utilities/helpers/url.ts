export const setRedirectUrl = (params: {
  targetUrl: string;
  redirectUrl?: string;
}) => {
  const target = params.targetUrl;
  const redirect = params.redirectUrl || '';
  return `${target}?redirect=${encodeURIComponent(redirect)}`;
};

export const getUrlParam = (urlParamName: string) => {
  if (typeof window === 'undefined') {
    return '/';
  }

  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(urlParamName) || '/';
};

export function setUrlParam(name: string, value: string | null): string {
  if (typeof window === 'undefined') {
    return '/';
  }

  const url = new URL(window.location.href);

  if (value === null) {
    url.searchParams.delete(name);
  } else {
    url.searchParams.set(name, value);
  }

  return url.toString();
}
