import { userState } from '../hooks/store';
import { DefineComponent } from 'vue';
import { EnumPageType } from '../enums';

export interface IpositionPageInfo {
  style: Record<string, any>;
  type: EnumPageType;
  page: DefineComponent;
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
    page: DefineComponent,
    style: Record<string, any>,
    params: Record<string, any>
  ) => {
    nextState((stateData) => {
      stateData.positionList.push({
        pageInfo: {
          style,
          page,
          type: EnumPageType.Position,
        },
        params,
      });
    });
  };

  const closePage = (ctx: { attrs: any } | null) => {
    const index = ctx?.attrs?.fbindex || 0;
    nextState((stateData) => {
      (stateData.positionList[index].pageInfo.page as any) = null;
    });
  };

  return {
    state,
    setState,
    openPage,
    closePage,
  };
};

export const usepositionStore = positionStore();
