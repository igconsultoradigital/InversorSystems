

var referralId = session.userIdReferral;
var levelsReferreal = db.Configuration.Where(x => x.clave = Enum.LevelReferralDescription); //int value
var countLevel = 1;
var percentage = 0;
var ListUserReferreal = new List<UserReferrealModel> ();

forEach (level in levelsReferreal)
{

	var userReferreal = users.where(x => x.user_id == referralId);
	if(userReferreal != null)
	{
		var levelsReferreal = db.Configuration.Where(x => x.clave = Enum.LevelReferralDescription);
		percentage =  db.Configuration.Where(x => x.clave = "PercentageLevel_"+ percentage.toString()); //int value
		referrealId = userReferreal.userIdReferral;

		var UserReferrealModel = new UserReferrealModel(){
			userReferrealId = userReferreal.user_id,
			userReferrealName = userReferreal.name,
			userReferrealLastName = userReferreal.lastName
			userReferrealEmail = userReferreal.lastName;
			userReferrealLevel = count;
			userReferrealPercentage = percentage
		};

		ListUserReferreal.Add(UserReferrealModel);
		count++;
	}

}