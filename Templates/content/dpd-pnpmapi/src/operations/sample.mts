import { toFetchOperation } from '@darkpatternsdigital/openapi-codegen-typescript-fetch';
import { conversion as getEnvironmentInfo } from '../generated/api/operations/getEnvironmentInfo';

export const getEnvironmentInfoAsync = toFetchOperation(
	fetch,
	getEnvironmentInfo,
);
