import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function ScrollTop(props) {
	const location = useLocation();
	const [previousLocation, setPreviousLocation] = useState(null);

	useEffect(() => {
		if (previousLocation !== location.pathname) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setPreviousLocation(location.pathname);
		}
	}, [location, previousLocation]);

	return <>{props.children}</>;
}
