# DSA SF Membership Portal UI

A graphical user interface for the [DSA SF Membership API](https://github.com/DSASanFrancisco/membership_api)

# Installation

0. Install HomeBrew from https://brew.sh
1. Download and install Node / NPM
```
brew install node
```
or for Linux 
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install
```

2. Create your `.env` config file
```
cp example.env .env
# edit .env to your liking
```

3. Run the server
```
npm run dev
```
