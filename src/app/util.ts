function randomKey(): string {
    return Math.random()
        .toString(36)
        .substring(7);
}

export { randomKey };
