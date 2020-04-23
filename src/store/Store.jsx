import { observable, action, computed } from 'mobx';

class Store {
    @observable widgets = [
        { x: 0, y: 0, w: 1, h: 5, minH: 2, maxH: 5, title: "Title W1" },
        { x: 4, y: 2, w: 3, h: 5, minH: 2, maxH: 5, title: "Title W2" },
        { x: 6, y: 2, w: 2, h: 5, minH: 2, maxH: 5, title: "Title W3" },
        { x: 8, y: 2, w: 2, h: 5, minH: 2, maxH: 5, title: "Title W4" },
        { x: 10, y: 2, w: 2, h: 2, minH: 2, maxH: 5, title: "Title W5" },
        { x: 0, y: 3, w: 2, h: 3, minH: 2, maxH: 5, title: "Title W6" },
        { x: 2, y: 5, w: 2, h: 5, minH: 2, maxH: 5, title: "Title W7" },
        { x: 4, y: 4, w: 2, h: 4, minH: 2, maxH: 5, title: "Title W8" },
        { x: 6, y: 2, w: 2, h: 2, minH: 2, maxH: 5, title: "Title W9"}
    ];
    @observable showSidebar = false;
    draggingWidget = '';

    @action addWidgetAtFirstPosition(widgetTitle) {
        this.widgets.unshift({
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

    @action updateCount() {
        this.likesCount++;
    }

    @action postComment(comment) {
        this.comments.push(comment)
    }

    @computed get commentsCount() {
        return this.comments.length;
    }

}

const storeInstance = new Store();

export default storeInstance;

