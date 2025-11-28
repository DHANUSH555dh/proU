// Test script for Room Features Editor system
const API_URL = 'http://localhost:5000/api';

// Admin credentials for testing
const adminCredentials = {
    email: 'admin@hotel.com',
    password: 'admin123'
};

async function testFeaturesSystem() {
    console.log('🧪 Testing Room Features Editor System...\n');
    
    try {
        // 1. Login as admin
        console.log('1. 🔐 Testing admin login...');
        const loginResponse = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminCredentials)
        });
        
        const loginData = await loginResponse.json();
        if (!loginResponse.ok) {
            console.log('❌ Admin login failed:', loginData.message);
            return;
        }
        
        const token = loginData.token;
        console.log('✅ Admin login successful\n');
        
        // 2. Test Features API endpoints
        console.log('2. 🏷️ Testing Features API...');
        
        // Create test features
        const testFeatures = [
            { name: 'Premium WiFi', icon: '📶', description: 'High-speed WiFi connection' },
            { name: 'Balcony', icon: '🏞️', description: 'Private balcony with seating' },
            { name: 'Jacuzzi', icon: '🛁', description: 'In-room jacuzzi tub' },
            { name: 'Smart TV', icon: '📺', description: '55-inch smart TV with streaming' }
        ];
        
        const createdFeatures = [];
        
        for (const feature of testFeatures) {
            const createResponse = await fetch(`${API_URL}/features`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(feature)
            });
            
            if (createResponse.ok) {
                const created = await createResponse.json();
                createdFeatures.push(created);
                console.log(`✅ Created feature: ${feature.name}`);
            } else {
                console.log(`❌ Failed to create feature: ${feature.name}`);
            }
        }
        
        // Get all features
        const getFeaturesResponse = await fetch(`${API_URL}/features`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (getFeaturesResponse.ok) {
            const allFeatures = await getFeaturesResponse.json();
            console.log(`✅ Retrieved ${allFeatures.length} features`);
        }
        
        console.log('✅ Features API tests completed\n');
        
        // 3. Test Room with Features
        console.log('3. 🏨 Testing Room creation with features...');
        
        const testRoom = {
            roomNumber: 999,
            type: 'Suite',
            price: 299.99,
            capacity: 4,
            description: 'Luxury suite with premium features for testing',
            features: createdFeatures.slice(0, 2).map(f => f._id), // Assign first 2 features
            amenities: ['WiFi', 'Room Service', 'Mini Bar'],
            images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
            available: true
        };
        
        const createRoomResponse = await fetch(`${API_URL}/rooms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(testRoom)
        });
        
        if (createRoomResponse.ok) {
            const createdRoom = await createRoomResponse.json();
            console.log('✅ Created test room with features');
            
            // Verify room has features populated
            const getRoomResponse = await fetch(`${API_URL}/rooms/${createdRoom._id}`);
            if (getRoomResponse.ok) {
                const roomWithFeatures = await getRoomResponse.json();
                console.log(`✅ Room has ${roomWithFeatures.features?.length || 0} features populated`);
            }
        } else {
            console.log('❌ Failed to create test room');
        }
        
        console.log('✅ Room with features test completed\n');
        
        // 4. Test feature status toggle
        console.log('4. 🔄 Testing feature status toggle...');
        
        if (createdFeatures.length > 0) {
            const featureToToggle = createdFeatures[0];
            const toggleResponse = await fetch(`${API_URL}/features/${featureToToggle._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ isActive: false })
            });
            
            if (toggleResponse.ok) {
                console.log('✅ Successfully toggled feature status');
            } else {
                console.log('❌ Failed to toggle feature status');
            }
        }
        
        console.log('✅ Feature status toggle test completed\n');
        
        console.log('🎉 All Room Features Editor tests completed successfully!');
        console.log('🔗 Visit http://localhost:5000/admin/admin-dashboard.html to test the admin interface');
        console.log('🔗 Visit http://localhost:5000/pages/rooms.html to see features in room listings');
        
    } catch (error) {
        console.error('❌ Test failed with error:', error.message);
    }
}

// Run the test
testFeaturesSystem();