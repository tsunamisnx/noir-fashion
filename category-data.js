const CATEGORIES = {
    outerwear: {
        title: 'Верхняя одежда',
        label: 'Outerwear',
        bg: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1600&h=800&fit=crop',
        products: [
            { brand:'Balenciaga', name:'Oversized Leather Jacket', price:3200, badge:'new', sizes:['S','M','L','XL'], img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=700&fit=crop' },
            { brand:'Rick Owens', name:'DRKSHDW Bauhaus Coat', price:2800, badge:'new', sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1544022613-e0ca46db8bc3?w=600&h=700&fit=crop' },
            { brand:'ERD', name:'Distressed Bomber Jacket', price:1950, badge:'new', sizes:['M','L','XL'], img:'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=700&fit=crop' },
            { brand:'Yohji Yamamoto', name:'Asymmetric Wool Coat', price:4500, badge:'sold-out', sizes:['S','M'], img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=700&fit=crop' },
            { brand:'Maison Margiela', name:'Deconstructed Trench', price:3100, badge:'new', sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop' },
            { brand:'Balenciaga', name:'Puffer Vest Oversized', price:1800, sizes:['M','L','XL'], img:'https://images.unsplash.com/photo-1548126032-0797597e8b5d?w=600&h=700&fit=crop' },
            { brand:'Undercover', name:'Scab Motif Blazer', price:2200, badge:'new', sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1507679799987-c73b1bb3a8e2?w=600&h=700&fit=crop' },
            { brand:'Comme des Garçons', name:'Quilted Jacket', price:1600, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1591040571752-d403a7390778?w=600&h=700&fit=crop' },
            { brand:'Acne Studios', name:'Wrap Coat Wool', price:2400, badge:'sale', oldPrice:3200, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1548624149-8f5dc744a1c1?w=600&h=700&fit=crop' },
            { brand:'Rick Owens', name:'Leather Biker Jacket', price:3800, badge:'new', sizes:['S','M','L','XL'], img:'https://images.unsplash.com/photo-1520975954732-2a2bf6c7917b?w=600&h=700&fit=crop' },
            { brand:'ERD', name:'Faux Fur Long Coat', price:2100, sizes:['M','L'], img:'https://images.unsplash.com/photo-1551488831-00dd590d7810?w=600&h=700&fit=crop' },
            { brand:'Maison Margiela', name:'Replica Leather Jacket', price:2900, badge:'sale', oldPrice:3600, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1521223890158-f9f7c709f836?w=600&h=700&fit=crop' }
        ]
    },
    knitwear: {
        title: 'Трикотаж',
        label: 'Knitwear',
        bg: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1600&h=800&fit=crop',
        products: [
            { brand:'ERD', name:'Distressed Knit Sweater', price:1450, badge:'new', sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=700&fit=crop' },
            { brand:'Comme des Garçons', name:'Play Heart Cardigan', price:980, badge:'new', sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1434389677669-e08b4cda3a94?w=600&h=700&fit=crop' },
            { brand:'Acne Studios', name:'Rel Cashmere Knit', price:750, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1578581107889-9a7e538609e4?w=600&h=700&fit=crop' },
            { brand:'Balenciaga', name:'Logo Intarsia Sweater', price:1900, badge:'new', sizes:['M','L','XL'], img:'https://images.unsplash.com/photo-1556905055-8f358a6f9011?w=600&h=700&fit=crop' },
            { brand:'Rick Owens', name:'DRKSHDW Ribbed Turtleneck', price:1200, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1583743814966-893ee34daf79?w=600&h=700&fit=crop' },
            { brand:'Maison Margiela', name:'Replica Cable Knit', price:1100, badge:'sale', oldPrice:1500, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1576871337632-b9aef4fd17aa?w=600&h=700&fit=crop' },
            { brand:'Yohji Yamamoto', name:'Asymmetric Knit Vest', price:1650, badge:'new', sizes:['S','M'], img:'https://images.unsplash.com/photo-1620799139507-2f76f41b84df?w=600&h=700&fit=crop' },
            { brand:'Undercover', name:'Scab Patch Sweater', price:890, sizes:['S','M','L','XL'], img:'https://images.unsplash.com/photo-1614975059251-9924ff1e6a6f?w=600&h=700&fit=crop' }
        ]
    },
    accessories: {
        title: 'Аксессуары',
        label: 'Accessories',
        bg: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&h=800&fit=crop',
        products: [
            { brand:'Maison Margiela', name:'Tabi Boots Leather', price:1590, badge:'new', sizes:['38','40','42','44'], img:'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=700&fit=crop' },
            { brand:'Acne Studios', name:'Face Patch Beanie', price:200, badge:'sale', oldPrice:250, sizes:['ONE'], img:'https://images.unsplash.com/photo-1510598034132-4916046d9c20?w=600&h=700&fit=crop' },
            { brand:'Balenciaga', name:'Hourglass Bag Small', price:2100, badge:'new', sizes:['ONE'], img:'https://images.unsplash.com/photo-1584918201985-84431e014e2c?w=600&h=700&fit=crop' },
            { brand:'Rick Owens', name:'Ramones Sneakers', price:950, sizes:['39','41','43','45'], img:'https://images.unsplash.com/photo-1549298916-b41d502d4e2b?w=600&h=700&fit=crop' },
            { brand:'Comme des Garçons', name:'Play Heart Wallet', price:380, badge:'new', sizes:['ONE'], img:'https://images.unsplash.com/photo-1627123425975-d539d517c6eb?w=600&h=700&fit=crop' },
            { brand:'Maison Margiela', name:'5AC Bag Leather', price:1850, sizes:['ONE'], img:'https://images.unsplash.com/photo-1590874106939-f2b0f77e687c?w=600&h=700&fit=crop' },
            { brand:'ERD', name:'Silver Chain Bracelet', price:420, badge:'new', sizes:['ONE'], img:'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=700&fit=crop' },
            { brand:'Undercover', name:'Scab Ring Set', price:350, sizes:['S','M','L'], img:'https://images.unsplash.com/photo-1605100804775-4a1e4c5f3250?w=600&h=700&fit=crop' },
            { brand:'Acne Studios', name:'Canada Scarf Wool', price:480, badge:'sale', oldPrice:600, sizes:['ONE'], img:'https://images.unsplash.com/photo-1601924990975-4867c2e7b5c6?w=600&h=700&fit=crop' },
            { brand:'Balenciaga', name:'Track Sneakers', price:1100, badge:'new', sizes:['39','41','43','44'], img:'https://images.unsplash.com/photo-1542291026-7eec264fd858?w=600&h=700&fit=crop' },
            { brand:'Rick Owens', name:'GeoBasket High', price:1250, sizes:['39','41','43'], img:'https://images.unsplash.com/photo-1595950657506-fc7abd5854f6?w=600&h=700&fit=crop' },
            { brand:'Comme des Garçons', name:'Play Heart Beanie', price:290, badge:'new', sizes:['ONE'], img:'https://images.unsplash.com/photo-1576871337632-b9aef4fd17aa?w=600&h=700&fit=crop' },
            { brand:'Yohji Yamamoto', name:'Y-3 Qasa Boot', price:680, sizes:['39','41','43','45'], img:'https://images.unsplash.com/photo-1600185365926-3a2934f93162?w=600&h=700&fit=crop' },
            { brand:'Maison Margiela', name:'Card Holder Leather', price:290, sizes:['ONE'], img:'https://images.unsplash.com/photo-1627123425975-d539d517c6eb?w=600&h=700&fit=crop' },
            { brand:'ERD', name:'Distressed Tote Bag', price:560, badge:'new', sizes:['ONE'], img:'https://images.unsplash.com/photo-1590874106939-f2b0f77e687c?w=600&h=700&fit=crop' }
        ]
    }
};
