import React, { useContext } from 'react';
import { StoreContext } from '../../main';
import { useObserver } from 'mobx-react';

export default function Comments() {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <table className="comments-table">
            <tbody>
                {
                    store.Widgets.map((comment, index) => ((
                        <tr key={index}>
                            <td>
                                {JSON.stringify(comment)}
                            </td>
                        </tr>
                    )))
                }
            </tbody>
        </table>
    ));
}