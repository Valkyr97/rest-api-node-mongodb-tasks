export const errorRetrieving = (err, res) => {
    res.status(500).json({message: err.message || "Something goes wrong retrieving the task"})
}

export const errorCreating = (err, res) => {
    res.status(500).json({message: err.message || "something goes wrong creating the task"})
}

export const errorDeleting = (err, res) => {
    res.status(500).json({message: err.message || "something goes wrong deleting the task"})
}

export const errorUpdating = (err, res) => {
    res.status(500).json({message: err.message || "something goes wrong updating the task"})
}