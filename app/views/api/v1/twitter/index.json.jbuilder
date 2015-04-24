json.tweets @tweets do |tweet|
	json.id tweet.id.to_s
	json.user tweet.user.screen_name
	json.text tweet.text
end