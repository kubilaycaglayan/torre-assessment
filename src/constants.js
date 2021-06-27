export const PROXY = 'https://cors-anywhere.herokuapp.com/';
export const GET_USER = userName => `https://bio.torre.co/api/bios/${userName}`;
export const POST_JOBS = 'https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=en&size=20&aggregate=false&offset=0';

export const CHANGE_CANDIDATE = 'CHANGE_CANDIDATE';
export const ADD_CANDIDATE = 'ADD_CANDIDATE';
export const CHANGE_CANDIDATE_RANK = 'CHANGE_CANDIDATE_RANK';
export const CHANGE_POOL_RANK = 'CHANGE_POOL_RANK';
export const CHANGE_JOB = 'CHANGE_JOB';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';
export const CHANGE_CANDIDATE_INPUT = 'CHANGE_CANDIDATE_INPUT';

export const LOADING_TALENT = 'LOADING_TALENT';
export const LOADING_JOB = 'LOADING_JOB';
export const NOT_LOADING = 'NOT_LOADING';
