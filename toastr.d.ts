// Type definitions for Toastr 2.0.1
// Project: https://github.com/CodeSeven/toastr
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

interface ToastrOptions {
	/**
	* Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
	*/
    showEasing?: string;
	/**
	* Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
	*/
    hideEasing?: string;
	/**
	* Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
	*/
    showMethod?: string;
	/**
	* Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
	*/
    hideMethod?: string;
	/**
	* Should a close button be shown
	*/
    closeButton?: boolean;
	/**
	* Html for the close button
	*/
    closeHtml?: string;
	/**
	* Should clicking on toast dismiss it?
	*/
    tapToDismiss?: boolean;
	/**
	* CSS class the toast element will be given
	*/
    toastClass?: string;
	/**
	* Id toast container will be given
	*/
    containerId?: string;
	/**
	* Should debug details be outputted to the console
	*/
    debug?: boolean;
	/**
	* Time in milliseconds the toast should take to show
	*/
    showDuration?: number;
	/**
	* onShown function callback
	**/
    onShown?: () => void;
	/**
	* Time in milliseconds the toast should take to hide
	*/
    hideDuration?: number;
	/**
	* onHidden function callback
	**/
    onHidden?: () => void;
	/**
	* Time in milliseconds the toast should be displayed after mouse over
	*/
    extendedTimeOut?: number;
    iconClasses?: {
		/**
		* Icon to use on error toasts
		*/
        error: string;
		/**
		* Icon to use on info toasts
		*/
        info: string;
		/**
		* Icon to use on success toasts
		*/
        success: string;
		/**
		* Icon to use on warning toasts
		*/
        warning: string;
    };
	/**
	* Icon to use for toast
	*/
    iconClass?: string;
	/**
	* Where toast should be displayed
	*/
    positionClass?: string;
	/**
	* Where toast should be displayed - background
	*/
    backgroundpositionClass?: string;
	/**
	* Time in milliseconds that the toast should be displayed
	*/
    timeOut?: number;
	/**
	* CSS class the title element will be given
	*/
    titleClass?: string;
	/**
	* CSS class the message element will be given
	*/
    messageClass?: string;
	/**
	* Set newest toast to appear on top
	**/
    newestOnTop?: boolean;
	/**
	* The element to put the toastr container
	**/
    target?: string;
	/**
	* Rather than having identical toasts stack, set the preventDuplicates property to true. Duplicates are matched to the previous toast based on their message content.
	*/
    preventDuplicates?: boolean;
	/**
	* Visually indicates how long before a toast expires.
	*/
    progressBar?: boolean;
	/**
	* Function to execute on toast click
	*/
    onclick?: () => void;
	/**
	* Set if toastr should parse containing html 
	**/
    allowHtml?: boolean;
}

interface ToastrDisplayMethod {
	/**
	* Create a toast
	*
	* @param message Message to display in toast
	*/
    (message: string): JQuery;
	/**
	* Create a toast
	*
	* @param message Message to display in toast
	* @param title Title to display on toast
	*/
    (message: string, title: string): JQuery;
	/**
	* Create a toast
	*
	* @param message Message to display in toast
	* @param title Title to display on toast
	* @param overrides Option values for toast
	*/
    (message: string, title: string, overrides: ToastrOptions): JQuery;
}

interface Toastr {
	/**
	* Clear toasts
	*/
    clear: {
		/**
		* Clear all toasts
		*/
        (): void;
		/**
		* Clear specific toast
		* 
		* @param toast Toast to clear
		*/
        (toast: JQuery): void;
    };
	/**
	* Create an error toast
	*/
    error: ToastrDisplayMethod;
	/**
	* Create an info toast
	*/
    info: ToastrDisplayMethod;
	/**
	* Create an options object
	*/
    options: ToastrOptions;
	/**
	* Create a success toast
	*/
    success: ToastrDisplayMethod;
	/**
	* Create a warning toast
	*/
    warning: ToastrDisplayMethod;
	/**
	* Get toastr version 
	*/
    version: string;
}

type BodyOutputType = "trustedHtml" | "template" | "templateWithData" | "directive";
type ToastType = 'success' | 'error' | 'warning' | 'note' | 'info';
interface Toast {
    id: string;
    uid: string;
    type: string; //('success', 'error', 'warning', 'note')
    title: string;
    body: string;
    closeHtml?: string,
    directiveData?: any;
    showCloseButton?: boolean;
    onShowCallback?: Function;
    timeoutPromise?: any;
    onHideCallback?: Function;
    clickHandler?: ToastClickHandler | string;
}

interface ToastClickHandler {
    (toast: Toast, isCloseButton: boolean): void
}

interface ToasterPopMethod {
    /**
        * Create a toast
        *
        * @param type Option values ('success', 'error', 'warning', 'note')
        * @param title Title to display on toast
        * @param body Message to display in toast
        */
    (type: string, title: string, body: string): void;
    /**
        * Create a toast
        *
        * @param type Option values ('success', 'error', 'warning', 'note')
        * @param title Title to display on toast
        * @param body Message to display in toast
        * @param timeout Set timeOut to 0 to make it sticky
        * @param bodyOutputType Any of "trustedHtml", "template", "templateWithData", "directive"
        * @param clickHandler on click to dismiss do your special thing!.
        * @param toasterId toast container id to select where to put the toast. If more than one exist.
        * @param showCloseButton figure this out by yourself.
        * @param toastId reference id for the toast.
        * @param onHideCallback after the timeout period elapses this handler is called.
        */
    (type: ToastType, title: string, body: string, timeout?: number, bodyOutputType?: BodyOutputType, clickHandler?: ToastClickHandler | string, toasterId?: string | number, showCloseButton?: boolean, toastId?: string | number, onHideCallback?: Function): void;
}

interface ToasterClearMethod {
    (toasterId: string | number, toastId: string | number): void;
}

interface IToasterConfig {
    'limit'?: number; // limits max number of toasts 
    'tap-to-dismiss'?: boolean;
    'close-button'?: boolean;
    'close-html'?: string;
    'newest-on-top'?: boolean;
    'time-out'?: number; // Set timeOut and extendedTimeout to 0 to make it sticky
    'icon-classes'?: {
        error?: string;
        info?: string;
        wait?: string;
        success?: string;
        warning?: string;
    },
    'body-output-type'?: string; // Options: '', 'trustedHtml', 'template', 'templateWithData', 'directive'
    'body-template'?: string;
    'icon-class'?: string;
    'position-class'?: string; // Options (see CSS):
    // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
    // 'toast-top-left', 'toast-top-center', 'toast-top-right',
    // 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-right',
    'title-class'?: string;
    'message-class'?: string;
    'prevent-duplicates'?: boolean;
    'mouseover-timer-stop'?: boolean; // stop timeout on mouseover and restart timer on mouseout
}

declare var toastr: Toastr;
declare module "toastr" {
    export = toastr;
}
