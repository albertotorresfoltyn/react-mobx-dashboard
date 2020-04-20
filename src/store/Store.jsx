import { observable, action, computed } from 'mobx'

class Store {
    @observable Title = 'The Object Title'

    @observable Widgets = [
        { x :0, y :0, w :2, h : 4, title: "Title W0" },
        { x :2, y :0, w :2, h : 5, title: "Title W1" },
        { x :4, y :0, w :2, h : 5, title: "Title W2" },
        { x :6, y :0, w :2, h :5, title: "Title W3" },
        { x :8, y :0, w :2, h : 5, title:  "Title W4" },
        { x :10, y :0, w :2, h : 2, title: "Title W5" },
        { x :0, y :3, w :2, h : 3, title: "Title W6" },
        { x :2, y :5, w :2, h : 5, title:  "Title W7" },
        { x :4, y :4, w :2, h : 4, title:  "Title W8" },
        { x :6, y :2, w:2, h: 2 , title: "Title W9"}
    ];

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

const storeInstance = new Store()

export default storeInstance;