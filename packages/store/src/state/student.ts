import { create } from 'zustand';
import type { StudentGet } from '@repo/types';
import { hasChanges } from '@repo/utils';

export type StudentsValue = StudentGet[] | null | undefined;

interface StudentState {
  students: StudentsValue;
  deleted: StudentGet[];
  setStudents: (data: StudentsValue) => void;
  setDeletedStudents: (data: StudentsValue) => void;
  clearStudents: () => void;
  clearDeletedStudents: () => void;
  addStudent: (data: StudentGet) => void;
  updateStudent: (data: StudentGet) => void;
  mergeStudents: (data: StudentGet[]) => void;
  deleteStudent: (data: StudentGet) => void;
}

export const useStoreStudent = create<StudentState>((set) => ({
  students: undefined,
  deleted: [],

  setStudents: (data) => {
    set({ students: data });
  },

  setDeletedStudents: (data) => {
    set({ deleted: data || [] });
  },

  clearStudents: () => {
    set({ students: [] });
  },

  clearDeletedStudents: () => {
    set({ deleted: [] });
  },

  addStudent: (data) => {
    set((state) => ({
      students: [...(state.students ?? []), data],
    }));
  },

  updateStudent: (data) => {
    set((state) => ({
      students: state.students?.map((i) => (i.id === data.id ? { ...data } : i)) ?? undefined,
    }));
  },

  mergeStudents: (incomingStudents) => {
    set((state) => {
      if (!incomingStudents || incomingStudents.length === 0) return state;

      // If initial state is empty, set it directly
      if (!state.students) {
        return { students: incomingStudents };
      }

      let hasChanged = false;
      const incomingMap = new Map(incomingStudents.map((n) => [String(n.id), n]));

      // 1. Update existing students in place if fields differ
      const nextStudents = state.students.map((existing) => {
        const incoming = incomingMap.get(String(existing.id));
        if (!incoming) return existing;

        // Check if any property changed
        const isDifferent = hasChanges(existing, incoming);

        if (isDifferent) {
          hasChanged = true;
          return { ...existing, ...incoming };
        }

        // Return exact same reference if nothing changed
        return existing;
      });

      // 2. Append new students that aren't in the store yet
      const existingIds = new Set(state.students.map((n) => String(n.id)));
      for (const incoming of incomingStudents) {
        if (!existingIds.has(String(incoming.id))) {
          nextStudents.push(incoming);
          hasChanged = true;
        }
      }

      // CRITICAL: Return original `state` if nothing changed.
      // Zustand skips re-rendering all subscribers when the returned state reference is identical.
      if (!hasChanged) return state;

      return { students: nextStudents };
    });
  },

  deleteStudent: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      students: state.students?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
