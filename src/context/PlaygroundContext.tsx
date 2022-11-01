import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

interface PlaygroundContextType {
  folders: any;
  setFolders: any;
  createNewFolder: (folderTitle: string) => void;
  createNewPlayground: (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => void;
  createNewFolderAndPlayground: (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => void;
  editCardTitle: (
    folderId: string,
    cardTitle: string,
    newCardTitle: string
  ) => void;
  editFolderTitle: (folderId: string, newFolderTitle: string) => void;
  deleteCard: (folderId: string, cardId: string) => void;
  deleteFolder: (folderId: string) => void;
}

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null
);

export interface FolderType {
  [key: string]: {
    title: string;
    items: {
      [key: string]: {
        title: string;
        language: string;
      };
    };
  };
}

const initialItems = {
  [uuid()]: {
    title: "Folder Title 1",
    items: {
      ["item1"]: {
        title: "Stack Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "Queue Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "Sort Implementation",
        language: "C++",
      },
    },
  },
  [uuid()]: {
    title: "Folder Title 2",
    items: {
      [uuid()]: {
        title: "Array Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "Search Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "Dequeue Implementation",
        language: "C++",
      },
    },
  },
};

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders, setFolders] = useState(() => {
    let localData = JSON.parse(
      localStorage.getItem("playground-data") as string
    );
    localData =
      localData === undefined ||
      localData === null ||
      Object.keys(localData).length === 0
        ? null
        : localData;
    return localData || initialItems;
  });

  useEffect(() => {
    localStorage.setItem("playground-data", JSON.stringify(folders));
  }, [folders]);

  const createNewFolder = (folderTitle: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderTitle,
        items: {},
      };
      return newState;
    });
  };

  const createNewPlayground = (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[folderId].items[uuid()] = {
        title: cardTitle,
        language: cardLanguage,
      };
      return newState;
    });
  };

  const createNewFolderAndPlayground = (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderTitle,
        items: {
          [uuid()]: {
            title: cardTitle,
            language: cardLanguage,
          },
        },
      };
      return newState;
    });
  };

  const editCardTitle = (
    folderId: string,
    cardId: string,
    newCardTitle: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[folderId].items[cardId].title = newCardTitle;
      return newState;
    });
  };

  const editFolderTitle = (folderId: string, newFolderTitle: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[folderId].title = newFolderTitle;
      return newState;
    });
  };

  const deleteCard = (folderId: string, cardId: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      delete newState[folderId].items[cardId];
      return newState;
    });
  };

  const deleteFolder = (folderId: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      delete newState[folderId];
      return newState;
    });
  };

  const makeAvailableGlobally: PlaygroundContextType = {
    folders: folders,
    setFolders: setFolders,
    createNewFolder: createNewFolder,
    createNewPlayground: createNewPlayground,
    createNewFolderAndPlayground: createNewFolderAndPlayground,
    editCardTitle: editCardTitle,
    editFolderTitle: editFolderTitle,
    deleteCard: deleteCard,
    deleteFolder: deleteFolder,
  };

  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  );
}
