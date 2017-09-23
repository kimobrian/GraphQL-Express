import { PubSub } from 'graphql-subscriptions';

const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

let nextId = 3;
const CHANNEL_ADDED_TOPIC = 'newChannel';
const pubsub = new PubSub();

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id === id);
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: String(nextId++), messages: [], name: args.name };
      channels.push(newChannel);
      pubsub.publish(CHANNEL_ADDED_TOPIC, { channelAdded: newChannel });
      return newChannel;
    }
  },
  Subscription: {
    channelAdded: {
      subscribe: () => pubsub.asyncIterator(CHANNEL_ADDED_TOPIC)
    }
  }
};
