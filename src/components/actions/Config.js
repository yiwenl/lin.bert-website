import _ from 'lodash';

let data = {};
let cache = {};

export const Save = (_data) => {
    data = _data;
}

export const CacheImage = (item) => {
  cache[item.id] = item.tag;
}

export const getProjectList = () => {
  return data.projects;
}

export const getAbout = () => {
  return data.about;
}

export const getPress = () => {
  return data.press;
}

export const getManifest = () => {
  return data.manifest;
}

export const getImageFromCache = (id) => {
  return id ? cache[id] : cache;
}
