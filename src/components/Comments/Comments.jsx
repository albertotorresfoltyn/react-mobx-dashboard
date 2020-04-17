import React, { useContext } from 'react';
import { StoreContext } from '../../main';
import { useObserver } from 'mobx-react';

export default function Comments() {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <table className="comments-table">
            <tbody>
                {
                    store.comments.map((comment, index) => ((
                        <tr key={index}>
                            <td>
                                {comment}
                            </td>
                        </tr>
                    )))
                }
            </tbody>
        </table>
    ));
}