import { userState } from '../hooks/store';
import { DefineComponent } from 'vue';
import { EnumPageType, EnumScreenType } from '../enums';

export interface IpositionPageInfo {
  style: Record<string, any>;
  type: EnumPageType;
  page: DefineComponent;
  id?: string | undefined;
  screen: EnumScreenType;
}

export interface IpositionItem {
  pageInfo: IpositionPageInfo;
  params: unknown;
}

interface Istate {
  positionList: IpositionItem[];
}

const initState: Istate = {
  positionList: [],
};

const positionStore = () => {
  const { state, setState, nextState } = userState(initState);

  const openPage = (
    ctx: { attrs: any } | null,
    payload: {
      page: DefineComponent;
      style: Record<string, any>;
      params: Record<string, any>;
      id?: string | undefined;
    }
  ) => {
    nextState((stateData) => {
      stateData.positionList.push({
        pageInfo: {
          style: payload.style,
          page: payload.page,
          type: EnumPageType.Position,
          id: payload.id,
          screen: EnumScreenType.Ordinary,
        },
        params: payload.params,
      });
    });
  };

  const closePage = (ctx: { attrs: any } | null, id?: string | undefined) => {
    const index = id ? state.positionList.findIndex((item) => item.pageInfo.id === id) : ctx?.attrs?.fbindex;
    nextState((stateData) => {
      (stateData.positionList[index].pageInfo.page as any) = null;
    });
  };

  const registerPage = (ctx: { attrs: any }, id: string) => {
    const index = state.positionList.findIndex((item) => item.pageInfo.id === id);
    nextState((stateData) => {
      stateData.positionList[index].pageInfo.id = id;
    });
  };

  const screenPage = (ctx: { attrs: any }, type: string | EnumScreenType, id?: string | undefined) => {
    const index = id ? state.positionList.findIndex((item) => item.pageInfo.id === id) : ctx?.attrs?.fbindex;
    nextState((stateData) => {
      stateData.positionList[index].pageInfo.screen = type as EnumScreenType;
    });
  };

  return {
    state,
    setState,
    openPage,
    closePage,
    registerPage,
    screenPage,
  };
};

export const usepositionStore = positionStore();
