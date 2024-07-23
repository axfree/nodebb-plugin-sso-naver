'use strict';

define('admin/plugins/sso-naver', ['settings', 'alerts'], function (Settings, alerts) {
	var ACP = {};

	ACP.init = function () {
		Settings.load('sso-naver', $('.sso-naver-settings'));

		$('#save').on('click', function () {
			Settings.save('sso-naver', $('.sso-naver-settings'), function () {
				alerts.alert({
					type: 'success',
					alert_id: 'sso-naver-saved',
					title: 'Settings Saved',
					message: 'Please rebuild and restart your NodeBB to apply these settings, or click on this alert to do so.',
					clickfn: function () {
						socket.emit('admin.reload');
					},
				});
			});
		});

		$('a[data-action="help-credentials"]').on('click', function () {
			bootbox.alert({
				title: 'Where is the Credentials page?',
				message: '<img src="' + config.relative_path + '/plugins/nodebb-plugin-sso-naver/images/credentials.png" />',
			});
			return false;
		});
	};

	return ACP;
});
