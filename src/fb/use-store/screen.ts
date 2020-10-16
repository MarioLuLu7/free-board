import { userState } from '../hooks/store';
import { EnumScreenType } from '../enums';

interface Istate {
  contentStyle: object;
  sideStyle: object;
  fullStyle: object;
}

const initState: Istate = {
  contentStyle: {},
  sideStyle: {},
  fullStyle: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    left: '0px',
    top: '0px',
    zIndex: 999,
  },
};

const ScreenStore = () => {
  const { state, setState } = userState(initState);

  const setStyle = (contentDOM: HTMLElement | null, sideDOM: HTMLElement | null) => {
    setState({
      contentStyle: {
        width: contentDOM?.offsetWidth + 'px',
        height: contentDOM?.offsetHeight + 'px',
        left: contentDOM?.offsetLeft + 'px',
        top: contentDOM?.offsetTop + 'px',
        position: 'fixed',
        zIndex: 999,
      },
      sideStyle: {
        width: sideDOM?.offsetWidth + 'px',
        height: sideDOM?.offsetHeight + 'px',
        left: sideDOM?.offsetLeft + 'px',
        top: sideDOM?.offsetTop + 'px',
        position: 'fixed',
        zIndex: 999,
      },
    });
  };

  const initscreen = () => {
    const contentDOM = document.getElementById('fb-content-layout');
    const sideDOM = document.getElementById('fb-side-layout');
    window.onresize = () => {
      setStyle(contentDOM, sideDOM);
    };
    setStyle(contentDOM, sideDOM);
  };

  const getScreeen = (screen: EnumScreenType | string) => {
    const myScreen = screen as EnumScreenType;
    switch (myScreen) {
      case EnumScreenType.Content:
        return state.contentStyle;
      case EnumScreenType.Side:
        return state.sideStyle;
      case EnumScreenType.Full:
        return state.fullStyle;
    }
  };

  return {
    state,
    setState,
    initscreen,
    getScreeen,
  };
};

export const useScreenStore = ScreenStore();
