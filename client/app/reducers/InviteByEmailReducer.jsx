import { REFERRAL_INVITE_EMAIL_SUCCESS, REFERRAL_INVITE_LIST_SUCCESS } from '../actions/Types';

export default function (state = {}, action) {
    switch (action.type) {
        case REFERRAL_INVITE_EMAIL_SUCCESS:
            return { ...state, newInvitedReferrals: action.payload };
        case REFERRAL_INVITE_LIST_SUCCESS:
            return { ...state, invitedReferrals: action.payload };
    }
    return state;
}
