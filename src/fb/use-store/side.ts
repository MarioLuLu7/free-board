import { userState } from '../hooks/store';
import { DefineComponent } from 'vue';
import { EnumPageType } from '../enums';

export interface IsidePageInfo {
  width: number;
  type: EnumPageType;
  page: DefineComponent;
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

  const openPage = (ctx: { attrs: any } | null, page: DefineComponent, width: number, params: Record<string, any>) => {
    const index = ctx?.attrs?.fbindex || 0;
    nextState((stateData) => {
      const ind = index + 1;
      stateData.sideList.splice(ind, state.sideList.length - ind);
      stateData.sideList.push({
        pageInfo: {
          width,
          page,
          type: EnumPageType.Side,
        },
        params,
      });
    });
  };

  const closePage = (ctx: { attrs: any } | null) => {
    const index = ctx?.attrs?.fbindex || 0;
    nextState((stateData) => {
      stateData.sideList.splice(index, state.sideList.length - index);
    });
  };

  return {
    state,
    setState,
    openPage,
    closePage,
  };
};

export const useSideStore = SideStore();
