import { ROUTE } from '../constants/constants';
import { $, parseToElements } from '../../@shared/utils';

export { menuButtons } from './templates/ui/menuButtons';

import { root } from './templates/main/root';
import { signIn } from './templates/main/signIn';
import { signUp } from './templates/main/signUp';
import { stationManage } from './templates/main/stationManage';
import { lineManage } from './templates/main/lineManage';
import { sectionManage } from './templates/main/sectionManage';
import { mapDisplay } from './templates/main/mapDisplay';

export { stationInfo, stationList } from './templates/main/stationManage';
export { lineInfo, lineList } from './templates/main/lineManage';
export { sectionInfo, sectionList } from './templates/main/sectionManage';
export { lineButton, lineButtonList } from './templates/main/mapDisplay';

import { stationModify } from './templates/modal/stationModify';
import { lineAddModify } from './templates/modal/lineAddModify';
import { sectionAddModify } from './templates/modal/sectionAddModify';
import { lineDisplay } from './templates/modal/lineDisplay';

export { mapSectionInfo, map } from './templates/modal/lineDisplay';

export const mainElements = {
  [ROUTE.ROOT]: $('#main-content', parseToElements(root)),
  [ROUTE.SIGNIN]: $('#main-content', parseToElements(signIn)),
  [ROUTE.SIGNUP]: $('#main-content', parseToElements(signUp)),
  [ROUTE.STATIONS]: $('#main-content', parseToElements(stationManage)),
  [ROUTE.LINES]: $('#main-content', parseToElements(lineManage)),
  [ROUTE.SECTIONS]: $('#main-content', parseToElements(sectionManage)),
  [ROUTE.MAP]: $('#main-content', parseToElements(mapDisplay)),
};

export const modalElements = {
  [ROUTE.STATIONS]: $('#modal-content', parseToElements(stationModify)),
  [ROUTE.LINES]: $('#modal-content', parseToElements(lineAddModify)),
  [ROUTE.SECTIONS]: $('#modal-content', parseToElements(sectionAddModify)),
  [ROUTE.MAP]: $('#modal-content', parseToElements(lineDisplay)),
};

export { subwayView } from './subwayView';
