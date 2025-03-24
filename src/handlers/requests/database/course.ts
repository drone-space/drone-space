import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { CourseCreate, CourseUpdate } from '@/types/models/course';

const baseRequestUrl = `${API_URL}/courses`;

export const coursesGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get courses):', error);
    throw error;
  }
};

export const courseGet = async (slug: { courseId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${slug.courseId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get course):', error);
    throw error;
  }
};

export const courseCreate = async (course: CourseCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(course),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create course):', error);
    throw error;
  }
};

export const courseUpdate = async (course: CourseUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${course.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(course),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update course):', error);
    throw error;
  }
};

export const courseDelete = async (courseId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${courseId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete course):', error);
    throw error;
  }
};
