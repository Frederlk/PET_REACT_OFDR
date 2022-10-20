// Подключение функционала "Чертогов Фрилансера"
import { gotoBlock } from "./gotoblock.js";
// Переменная контроля добавления события window scroll.
let addWindowScrollEvent = false;
//====================================================================================================================================================================================================================================================================================================
// Плавная навигация по странице
export function pageNavigation() {
    // data-goto - указать ID блока
    // data-goto-header - учитывать header
    // data-goto-top - недокрутить на указанный размер
    // data-goto-speed - скорость (только если используется доп плагин)
    // Работаем при клике на пункт
    document.addEventListener("click", pageNavigationAction);
    // Если подключен scrollWatcher, подсвечиваем текущий пукт меню
    document.addEventListener("watcherCallback", pageNavigationAction);
    // Основная функция
    function pageNavigationAction(e) {
        if (e.type === "click") {
            const targetElement = e.target;
            if (targetElement.closest("[data-goto]")) {
                const gotoLink = targetElement.closest("[data-goto]");
                const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                e.preventDefault();
            }
        } else if (e.type === "watcherCallback" && e.detail) {
            const entry = e.detail.entry;
            const targetElement = entry.target;
            // Обработка пунктов навигации, если указано значение navigator подсвечиваем текущий пукт меню
            if (targetElement.dataset.watch === "navigator") {
                const navigatorActiveItem = document.querySelector(`[data-goto]._navigator-active`);
                let navigatorCurrentItem;
                if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) {
                    navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`);
                } else if (targetElement.classList.length) {
                    for (let index = 0; index < targetElement.classList.length; index++) {
                        const element = targetElement.classList[index];
                        if (document.querySelector(`[data-goto=".${element}"]`)) {
                            navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                            break;
                        }
                    }
                }
                if (entry.isIntersecting) {
                    // Видим объект
                    // navigatorActiveItem ? navigatorActiveItem.classList.remove('_navigator-active') : null;
                    navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null;
                } else {
                    // Не видим объект
                    navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                }
            }
        }
    }
}

// При подключении модуля обработчик события запустится автоматически
setTimeout(() => {
    if (addWindowScrollEvent) {
        let windowScroll = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
            document.dispatchEvent(windowScroll);
        });
    }
}, 0);
