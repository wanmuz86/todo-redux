const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispactching:',action);
    console.log('Current store ', store.getState())
// Intercept before
    const result = next(action);
    // Intercept after
    console.log('State after action', store.getState());
    return result
}

export default loggerMiddleware;