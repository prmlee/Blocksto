import { createContext, useState } from 'react';

export type HousePanelType =
  | 'notebook-panel'
  | 'create-panel'
  | 'gmap-panel'
  | 'add-panel'
  | 'consult-panel';
