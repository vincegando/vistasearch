json.tweets @tweets do |tweet|
	json.id tweet.id
	json.user tweet.user.screen_name
	json.text tweet.text
end