import { NotificationType } from "@/graphql/generated/graphql";
import { Bell, CheckCircle, Fingerprint, Medal, Radio, User } from "lucide-react";

export function getNotificationIcon(type: NotificationType) {
    switch (type) {
        case NotificationType.NewFollower:
            return User;
        case NotificationType.EnableTwoFactorAuth:
            return Fingerprint;
        case NotificationType.NewSponsorship:
            return Medal;
        case NotificationType.StreamStarted:
            return Radio
        case NotificationType.VerifiedChannel:
            return CheckCircle;
        default:
            return Bell;
    }
}