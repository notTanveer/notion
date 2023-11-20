'use client';

import React, {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { File, Folder, workspace } from '../supabase/supabase.types';
import { usePathname } from 'next/navigation';

export type appFoldersType = Folder & { files: File[] | [] };
export type appWorkspacesType = workspace & {
  folders: appFoldersType[] | [];
};

interface AppState {
  workspaces: appWorkspacesType[] | [];
}

type Action =
  | { type: 'ADD_WORKSPACE'; payload: appWorkspacesType }
  | { type: 'DELETE_WORKSPACE'; payload: string }
  | {
      type: 'UPDATE_WORKSPACE';
      payload: { workspace: Partial<appWorkspacesType>; workspaceId: string };
    }

const initialState: AppState = { workspaces: [] }; 

const appReducer = (
    state: AppState = initialState,
    action: Action
  ): AppState => {
    switch (action.type) {
      case 'ADD_WORKSPACE':
        return {
          ...state,
          workspaces: [...state.workspaces, action.payload],
        };
      case 'DELETE_WORKSPACE':
        return {
          ...state,
          workspaces: state.workspaces.filter(
            (workspace) => workspace.id !== action.payload
          ),
        };
      case 'UPDATE_WORKSPACE':
        return {
          ...state,
          workspaces: state.workspaces.map((workspace) => {
            if (workspace.id === action.payload.workspaceId) {
              return {
                ...workspace,
                ...action.payload.workspace,
              };
            }
            return workspace;
          }),
        };
        default:
            return initialState;
    }
}
