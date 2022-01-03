import React, { useContext, useEffect, Fragment } from "react";
import { v4 as uuid } from "uuid";
import { SocketContext } from "./store/context/SocketContext";
import { Store } from "./store/context/StoreProvider";
import { ACTIONS } from "./store/actions/StoreAction";

export function SocketListener({ children }) {
	const socket = useContext(SocketContext);
	const [store, storeDispatch] = useContext(Store);

	useEffect(() => {
		if (socket) {
			socket.on("notification", (data) => {
				storeDispatch({
					type: ACTIONS.NOTIFICATION_RECEIVED,
					payload: {
						id: uuid(),
						show: true,
						...data,
					},
				});
			});
		}
	}, [socket, storeDispatch]);

	return <Fragment>{children}</Fragment>;
}
