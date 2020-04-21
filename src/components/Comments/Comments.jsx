import React from 'react';
import { StoreContext } from '../main';
import { useObserver } from 'mobx-react';
import { useContext } from 'react';

export default function Comments() {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <table className="comments-table">
            <tbody>
                {
                    store.widgets.map((comment, index) => ((
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