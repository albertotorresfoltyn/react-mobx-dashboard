import { observable, action, computed } from 'mobx';
import uid from 'uid';
class Store {
    @observable widgets = [
        { x: 0, y: 0, w: 1, h: 5, minH: 2, maxH: 5, title: "Title W1", id: uid(32), url: 'http://www.google.com'},
        { x: 4, y: 2, w: 3, h: 5, minH: 2, maxH: 5, title: "Title W2", id: uid(32), url: 'http://www.facebook.com'},
        { x: 6, y: 2, w: 2, h: 5, minH: 2, maxH: 5, title: "Title W3", id: uid(32), url: 'http://www.xkcd.com'},
        { x: 8, y: 2, w: 2, h: 5, minH: 2, maxH: 5, title: "Title W4", id: uid(32), url: 'http://imdb.com'},
        { x: 10, y: 2, w: 2, h: 2, minH: 2, maxH: 5, title: "Title W5", id: uid(32), url: 'http://www.dmi.dk'},
    ];
    @observable showSidebar = false;
    @observable editingWidget;
    draggingWidget = '';

    @action addWidgetAtFirstPosition(widgetTitle) {
        this.widgets.unshift({
            id: uid(32),
            x: 0,
            y: 0,
            w: 2,
            h: 4,
            minH: 2,
            maxH: 5,
            title: widgetTitle
        });
    }

    @action addDraggedWidget(widgetInfo) {
        if (this.draggingWidget) {
            this.widgets.unshift({
                x: widgetInfo.x,
                y: widgetInfo.y,
                w: 2,
                h: 4,
                minH: 2,
                maxH: 5,
                title: this.draggingWidget
            });
        }
        /*
        if (this.draggingWidget) {
            const widgets = [...this.widgets.map(w => ({
                x: w.x,
                y: w.y,
                w: w.w,
                h: w.h,
                minH: w.minH,
                maxH: w.maxH,
                title: w.title
            }))];
            debugger;
            const widgetIndex = widgets.findIndex(w => w.y > widgetInfo.y);
            if (widgetIndex > 0) {
                widgetIndex = widgetIndex-1;
            }
            const widgetsLength = widgets.length;
    

            if (widgetIndex === -1) {
                widgets.unshift({
                    x: widgetInfo.x,
                    y: widgetInfo.y,
                    w: 2,
                    h: 4,
                    minH: 2,
                    maxH: 5,
                    title: this.draggingWidget
                });
            } else {
                for (var j = widgetsLength; j > widgetIndex; j--) {
                    widgets[j] = {
                        ... widgets[j-1],
                        y: widgets[j-1].y + 4
                    };
                }
                widgets[widgetIndex] = {
                    x: widgetInfo.x,
                    y: widgetInfo.y,
                    w: 2,
                    h: 4,
                    minH: 2,
                    maxH: 5,
                    title: this.draggingWidget
                };
            }

            this.widgets = [...widgets];
           /* const widgets = [...this.widgets.map(w => ({
                x: w.x,
                y: w.y,
                w: w.w,
                h: w.h,
                minH: w.minH,
                maxH: w.maxH,
                title: w.title
            }))];
            widgets.push({
                x: widgetInfo.x,
                y: widgetInfo.y,
                w: 2,
                h: 4,
                minH: 2,
                maxH: 5,
                title: this.draggingWidget
            });

            this.widgets = [...widgets];
            */
    }

    @action setDraggingWidget(widgetName) {
        this.draggingWidget = widgetName;
    }

    @action clearDraggingWidget() {
        this.draggingWidget = '';
    }

    @action toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

    @action setEditWidget(widgetId) {
        this.editingWidget = this.widgets.find((w)=>w.id===widgetId);
    }

    @action changeProperty(propName, value) {
        this.editingWidget[propName] = value;
    }

}

const storeInstance = new Store();

export default storeInstance;

