export const authorize = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.roles[0])) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};