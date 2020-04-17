import { observable, action, computed } from 'mobx'

class Store {
    @observable Title = 'The Object Title'

    @observable Widgets = [
        { x: 0, y: 0, w: 2, h: 4, i: "0" },
        { x: 2, y: 0, w: 2, h: 3, i: "1" },
        { x: 4, y: 0, w: 2, h: 3, i: "2" },
        { x: 6, y: 0, w: 2, h: 5, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 2, i: "5" },
        { x: 0, y: 2, w: 2, h: 2, i: "6" },
        { x: 2, y: 2, w: 2, h: 2, i: "7" },
        { x: 4, y: 3, w: 2, h: 3, i: "8" },
        { x: 6, y: 2, w: 2, h: 2, i: "9" }
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