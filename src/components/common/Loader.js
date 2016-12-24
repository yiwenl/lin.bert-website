import createjs from 'preload-js';

const COMPLETE = "complete";
const PROGRESS = "progress";
const START = "loadstart";
const FILECOMPLETE = "fileload";

export const Load = (manifest, completeCB, progressCB, startCB, filecompleteCB) => {

  let queue = new createjs.LoadQueue();

  queue.on(COMPLETE,completeCB);
  queue.setMaxConnections(10);
  if(progressCB) queue.on(PROGRESS,progressCB);
  if(startCB) queue.on(START,startCB);
  if(filecompleteCB) queue.on(FILECOMPLETE,filecompleteCB);

  queue.loadManifest(manifest);
  return queue;
}
