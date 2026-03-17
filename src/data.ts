export type Rarity = 1 | 2 | 3 | 4 | 5;

export interface Animal {
    id: string;
    name: string;
    image: string;
    rarity: Rarity;
    hp: number;
    maxHp: number;
    type: 'fauna' | 'flora';
}

export const ANIMALS: Animal[] = [
    {
        id: 'a1',
        name: 'Red Fox',
        image: 'https://images.unsplash.com/photo-1760530742011-c82959df6674?w=800&q=80',
        rarity: 4,
        hp: 190,
        maxHp: 200,
        type: 'fauna',
    },
    {
        id: 'a2',
        name: 'Great Horned Owl',
        image: 'https://images.unsplash.com/photo-1661965590165-a7f66afe4e21?w=800&q=80',
        rarity: 5,
        hp: 220,
        maxHp: 250,
        type: 'fauna',
    },
    {
        id: 'a3',
        name: 'White-tailed Deer',
        image: 'https://images.unsplash.com/photo-1641415271457-2ff61a503e44?w=800&q=80',
        rarity: 3,
        hp: 180,
        maxHp: 200,
        type: 'fauna',
    },
    {
        id: 'a4',
        name: 'Eastern Cottontail',
        image: 'https://images.unsplash.com/photo-1745759620568-2da3eefbe2bd?w=800&q=80',
        rarity: 2,
        hp: 90,
        maxHp: 100,
        type: 'fauna',
    },
    {
        id: 'a5',
        name: 'Gray Squirrel',
        image: 'https://images.unsplash.com/photo-1769566796818-ab161f2f8ae3?w=800&q=80',
        rarity: 2,
        hp: 75,
        maxHp: 80,
        type: 'fauna',
    },
    {
        id: 'a6',
        name: 'Bald Eagle',
        image: 'https://images.unsplash.com/photo-1769108030755-ccded2be7c2e?w=800&q=80',
        rarity: 5,
        hp: 310,
        maxHp: 320,
        type: 'fauna',
    },
    {
        id: 'a7',
        name: 'Raccoon',
        image: 'https://images.unsplash.com/photo-1590993376702-aa761572b46d?w=800&q=80',
        rarity: 3,
        hp: 150,
        maxHp: 180,
        type: 'fauna',
    },
    {
        id: 'a8',
        name: 'Brown Bear',
        image: 'https://images.unsplash.com/photo-1749119750910-f5209acfbaec?w=800&q=80',
        rarity: 5,
        hp: 450,
        maxHp: 500,
        type: 'fauna',
    },
];

export interface FeedEvent {
    id: string;
    userName: string;
    userAvatar: string;
    animal: Animal;
    likes: number;
    comments: number;
    location: string;
    accuracy: number;
}

export const FEED_EVENTS: FeedEvent[] = [
    {
        id: 'f1',
        userName: 'Alex Rivers',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
        animal: ANIMALS[0],
        likes: 124,
        comments: 23,
        location: 'Forest Park, Portland',
        accuracy: 100,
    },
    {
        id: 'f2',
        userName: 'Sam Chen',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
        animal: ANIMALS[1],
        likes: 89,
        comments: 5,
        location: 'Mount Tabor',
        accuracy: 94,
    }
];

export const USER_PROFILE = {
    name: 'Alex Rivers',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80',
    level: 12,
    captured: 127,
    followers: '1.2k',
    following: 892,
    badges: ['Expert Hunter', 'Sharpshooter'],
    bio: ['Nature enthusiast', 'Wildlife photographer']
};
