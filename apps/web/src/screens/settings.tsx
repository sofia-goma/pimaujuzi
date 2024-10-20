import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/lib/utils";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function Settings() {
  const { locale, switchLanguage } = useLanguage();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        <FormattedMessage id="settings" defaultMessage="Settings" />
      </h1>

      <div className="space-y-6">
        {/* Language Settings */}
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium">
            <FormattedMessage id="language" defaultMessage="Language" />
          </label>
          <Select value={locale} onValueChange={(value) => switchLanguage(value as Lang)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notifications Settings */}
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium">
            <FormattedMessage id="notifications" defaultMessage="Notifications" />
          </label>
          <Switch
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>

        {/* Dark Mode Settings */}
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium">
            <FormattedMessage id="darkMode" defaultMessage="Dark Mode" />
          </label>
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
        </div>

        {/* Email Settings */}
        <div>
          <label className="text-lg font-medium mb-2 block">
            <FormattedMessage id="email" defaultMessage="Email" />
          </label>
          <Input type="email" placeholder="Enter your email" className="w-full" />
        </div>

        {/* Password Change */}
        <div>
          <label className="text-lg font-medium mb-2 block">
            <FormattedMessage id="changePassword" defaultMessage="Change Password" />
          </label>
          <Input type="password" placeholder="New password" className="w-full mb-2" />
          <Input type="password" placeholder="Confirm new password" className="w-full" />
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            <FormattedMessage id="privacyPolicy" defaultMessage="Privacy Policy" />
          </h2>
          <p className="text-sm text-muted-foreground mb-2">
            <FormattedMessage 
              id="privacyPolicyDescription" 
              defaultMessage="Read our privacy policy to understand how we handle your data."
            />
          </p>
          <Link to="/privacy-policy" className="text-primary hover:underline">
            <FormattedMessage id="readPrivacyPolicy" defaultMessage="Read Privacy Policy" />
          </Link>
        </div>

        {/* Save Button */}
        <Button className="w-full">
          <FormattedMessage id="saveChanges" defaultMessage="Save Changes" />
        </Button>

        {/* Developed by Sofia Team */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          <FormattedMessage 
            id="developedBy" 
            defaultMessage="Developed by Sofia Team"
          />
        </div>
      </div>
    </div>
  );
}
