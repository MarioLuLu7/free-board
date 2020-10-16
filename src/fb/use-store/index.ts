import { useSideStore } from './side';
import { usepositionStore } from './position';

import { EnumPageType, EnumScreenType } from '../enums';

const getUse = (pageType: EnumPageType) => {
  switch (pageType) {
    case EnumPageType.Side:
      return useSideStore;
      break;
    case EnumPageType.Position:
      return usepositionStore;
      break;
  }
};

export const closePage = (ctx: { attrs: any } | null, id?: string | undefined) => {
  const pageType = ctx?.attrs?.fbtype || EnumPageType.Side;
  getUse(pageType)?.closePage(ctx, id);
};

export const closeAllSidePage = () => {
  useSideStore.closePage({
    attrs: {
      fbindex: 0,
    },
  });
};

export const closeAllPositionPage = () => {
  usepositionStore.closePage({
    attrs: {
      fbindex: 0,
    },
  });
};

export const closeAllPage = () => {
  closeAllSidePage();
  closeAllPositionPage();
};

export const registerPage = (ctx: { attrs: any }, payload: { id: string }) => {
  const pageType = ctx?.attrs?.fbtype || EnumPageType.Side;
  getUse(pageType)?.registerPage(ctx, payload.id);
};

export const openSidePage = (...arg: Parameters<typeof useSideStore.openPage>) => {
  useSideStore.openPage(...arg);
};

export const openPositionPage = (...arg: Parameters<typeof usepositionStore.openPage>) => {
  usepositionStore.openPage(...arg);
};

export const screenPage = (
  ctx: { attrs: any },
  payload: { type: string | EnumScreenType; id?: string | undefined }
) => {
  const pageType = ctx?.attrs?.fbtype || EnumPageType.Side;
  getUse(pageType)?.screenPage(ctx, payload.type, payload.id);
};

export default {
  closePage,
  closeAllSidePage,
  closeAllPositionPage,
  closeAllPage,
  registerPage,
  openSidePage,
  openPositionPage,
  screenPage,
};
