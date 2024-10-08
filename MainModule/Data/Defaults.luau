local UI = require(script.Parent.Parent.Client.UI)

local Cache = {
	-- Main
	bans = {},
	members = {},
	settings = {},
	-- Logs
	logs = {},
	-- userId
	players = {},
}

local Data = {
	Cache = Cache,
	creatorId = game.CreatorId,
	bans = {
		-- [UserId] = {Reason, Timestamp, fromUserId}
		-- Username is the last known username of the user when they were banned
		-- TODO: progressively parse and update each name!
		-- if Timestamp is -1 the ban is permanent
		-- if Timestamp is nil the ban is for the server session only
		-- saves only if Timestamp isn't nil
		["2"] = { "He been noob.", nil, 44391621 },
		["3"] = { "She was a noob.", nil, 44391621 },
		["5"] = { "Wow!", 1720922623, 44391621 },
	},
	logs = {},
	members = {
		-- example role data structure
		-- [userid] = {data}
		["1"] = {
			-- last known username? (update over time on init?)
			name = "Roblox",
			filter = {}, -- TODO: implement member filter for auth
			permissions = {},
			persist = {},
			roles = { "admin", "vip" },
		},
	},
	players = {},

	loaderSettings = {} :: { [string]: any },
	settings = {
		announcement = false,
		liveSettings = true,
		prefix = ";",
		vip = true,
		mutableHooks = false,
		gameHubEnabled = true,
		dashboardButtonRank = 0,
	},

	async = {
		gamepass = {},
		-- NOTE: ASSET/SUBS REQUIRE A PLAYER FOR PERMISSIONS AND CAN STILL BE AFFECTED BY ID COMMANDS!
		asset = {},
		subscription = {},
		-- TODO: need a way to define exact rank roles instead of >=
		group = {},
		-- [groupId] = {
		-- { rank = 200, roles = { "admin", "vip" }, rankAndAbove = true },
		-- },
	},
	defaultRole = {
		-- role "_rank" determines hierarchy
		-- 0 is reserved for the default role
		_rank = 0,
		name = "Player",
		color = "#0ff",

		-- when enabled only allows their player to be used with the player argument
		-- WARN: doesn't affect commands that use userids!
		onlyTargetSelf = false,

		permissions = {
			-- this permission bypasses all restrictions (danger!)
			admin = false,
			-- can PERMANENTLY ban users from the game
			ban = false,
			-- can kick or ban users from the current server session
			kick = false,
			-- allows the user to manage roles of other users with a lesser role
			roles = false,
			saveRoles = false, -- if the user can also save the roles across sessions
			-- can configure the global admin settings
			settings = false,
			-- can view audit logs
			logs = false,
		},

		-- allowed command groups
		groups = {
			-- "creator",
			-- "administration",
			-- "moderation",
			-- "environment",
			-- "general",
			-- "fun",
			-- "vip",
			"utility",
		},

		-- command name/alias filter
		filter = {
			-- allows the help command unless it's disabled
			help = true,
			-- prevents the use of the kill command
			kill = false,
		},
	},
	roles = {
		-- WARN: unique key should NEVER be changed or you may lose save data
		vip = {
			_rank = 1,
			name = "VIP",
			groups = { "vip" },
			permissions = {},
			color = "#0f8",
			onlyTargetSelf = true,
		},
		mod = {
			_rank = 2,
			name = "Moderator",
			groups = { "moderation", "general", "environment", "fun", "vip" },
			permissions = { kick = true, logs = true },
			color = "#0f0",
		},
		admin = {
			_rank = 3,
			name = "Administrator",
			groups = { "administration", "moderation", "general", "environment", "fun", "vip" },
			permissions = { ban = true, kick = true, roles = true, logs = true },
			color = "#ff0",
		},
		superadmin = {
			_rank = 4,
			name = "SuperAdmin",
			groups = { "creator", "administration", "moderation", "general", "environment", "fun", "vip" },
			permissions = { ban = true, kick = true, roles = true, logs = true, settings = true },
			color = "#f80",
		},
		-- FIXME should this be defined and configurable? (or should it just be forced...)
		creator = {
			_rank = math.huge,
			name = "Game Creator",
			permissions = { admin = true },
			color = "#f00",
		},
	},

	gameClosing = false,
	pendingSaveMain = false,
	pendingSaveLogs = false,

	banHandler = nil,
	banUser = nil,
	initialize = nil,
	Store = nil,
}

Data.roles.defaultRole = Data.defaultRole

function Data.sortTime(a, b)
	return a.time < b.time
end

if game:GetService("RunService"):IsServer() then
	Data.Store = require(script.Parent.Store)
end

-- UI Theme initial settings
for key, state in UI.Theme do
	Data.settings["theme" .. key] = UI.peek(state)
end

return Data
