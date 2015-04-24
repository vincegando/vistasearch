json.tweets @tweets do |tweet|
	#puts tweet.to_json 
	json.id tweet.id
	json.user tweet.user.screen_name
	json.text tweet.text
end