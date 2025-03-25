const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitData = (data) => {
    return { type: SUBMIT_FORM,
         newName: data.name,
        newEmail: data.email,
        newPassword: data.password }
};