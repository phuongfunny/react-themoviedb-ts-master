import LayoutMovie from './Movies/index';
import QuanDoo from './Quandoo/index';

export enum LayoutType {
  movie,
  bandoo,
}
const Layout = (type: LayoutType) => {
  switch (type) {
    case LayoutType.bandoo:
      return QuanDoo;
    case LayoutType.movie:
      return LayoutMovie;
    default:
      return LayoutMovie;
  }
};
export default Layout;
