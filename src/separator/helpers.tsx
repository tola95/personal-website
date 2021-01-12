export const separateElements = (originalElements?: JSX.Element[], separator?: JSX.Element, horizontal: boolean = true): JSX.Element[] => {
    let separatedElements: JSX.Element[] = [];

    if (!originalElements) {
        return separatedElements;
    }

    for (let i = 0; i < (originalElements.length * 2) - 1; i++) {
        if (i % 2 === 0) {
            separatedElements[i] = originalElements[i/2];
        } else {
            separatedElements[i] = separator ||
                ((<div className={horizontal ? "SeparatorIcon" : "VerticalSeparatorIcon"} key={`separator_${i}`} style={{width: "10vmin"}}>{horizontal ? "|" : '.'}</div>));
        }
    }
    return separatedElements;
};