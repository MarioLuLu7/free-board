import { useSideStore } from './side';
import { usepositionStore } from './position';

import { EnumPageType } from '../enums';

export const closePage = (ctx: { attrs: any } | null) => {
  const pageType = ctx?.attrs?.fbtype || EnumPageType.Side;
  switch (pageType) {
    case EnumPageType.Side:
      useSideStore.closePage(ctx);
      break;
    case EnumPageType.Position:
      usepositionStore.closePage(ctx);
      break;
  }
};

export const openSidePage = (...arg: Parameters<typeof useSideStore.openPage>) => {
  useSideStore.openPage(...arg);
};

export const openPositionPage = (...arg: Parameters<typeof usepositionStore.openPage>) => {
  usepositionStore.openPage(...arg);
};

export default {
  closePage,
  openSidePage,
  openPositionPage,
};
