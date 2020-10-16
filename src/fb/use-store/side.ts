import { userState } from '../hooks/store';
import { DefineComponent } from 'vue';
import { EnumPageType, EnumScreenType } from '../enums';

export interface IsidePageInfo {
  width: number;
  type: EnumPageType;
  page: DefineComponent;
  id: string | undefined;
  screen: EnumScreenType;
}

export interface IsideItem {
  pageInfo: IsidePageInfo;
  params: unknown;
}

interface Istate {
  sideList: IsideItem[];
}

const initState: Istate = {
  sideList: [],
};

const SideStore = () => {
  const { state, setState, nextState } = userState(initState);

  const openPage = (
    ctx: { attrs: any } | null,
    payload: {
      page: DefineComponent;
      width: number;
      params: Record<string, any>;
      id?: string | undefined;
    }
  ) => {
    const index = ctx?.attrs?.fbindex || 0;
    nextState((stateData) => {
      const ind = index + 1;
      stateData.sideList.splice(ind, state.sideList.length - ind);
      stateData.sideList.push({
        pageInfo: {
          width: payload.width,
          page: payload.page,
          type: EnumPageType.Side,
          id: payload.id,
          screen: EnumScreenType.Ordinary,
        },
        params: payload.params,
      });
    });
  };

  const closePage = (ctx: { attrs: any } | null, id?: string | undefined) => {
    const index = id ? state.sideList.findIndex((item) => item.pageInfo.id === id) : ctx?.attrs?.fbindex;
    nextState((stateData) => {
      stateData.sideList.splice(index, state.sideList.length - index);
    });
  };

  const registerPage = (ctx: { attrs: any }, id: string) => {
    const index = state.sideList.findIndex((item) => item.pageInfo.id === id);
    nextState((stateData) => {
      stateData.sideList[index].pageInfo.id = id;
    });
  };

  const screenPage = (ctx: { attrs: any }, type: string | EnumScreenType, id?: string | undefined) => {
    const index = id ? state.sideList.findIndex((item) => item.pageInfo.id === id) : ctx?.attrs?.fbindex;
    nextState((stateData) => {
      stateData.sideList[index].pageInfo.screen = type as EnumScreenType;
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

export const useSideStore = SideStore();
