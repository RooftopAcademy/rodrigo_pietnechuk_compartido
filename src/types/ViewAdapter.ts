import type View from '../abstract/View';

/**
 * Allows abstract class View to be instantiated.
 * This has to be done to be able to instantiate its derived classes using polymorphism.
 */
type ViewAdapter = Pick<typeof View, keyof typeof View> & (new (el: HTMLElement) => View);

export default ViewAdapter;
