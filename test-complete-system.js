// Complete System Test for Happy Hotel Room Features Editor
const API_URL = 'http://localhost:5000/api';

console.log('🧪 Starting Complete Happy Hotel System Test...\n');

async function runCompleteTest() {
    let token = null;
    
    try {
        // 1. Test API Root
        console.log('1. 🌐 Testing API Root...');
        const apiResponse = await fetch('http://localhost:5000');
        if (apiResponse.ok) {
            const apiData = await apiResponse.json();
            console.log('✅ API Root accessible:', apiData.message);
        } else {
            console.log('❌ API Root failed');
        }
        
        // 2. Test Admin Login
        console.log('\n2. 🔐 Testing Admin Login...');
        const loginResponse = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'admin@hotel.com',
                password: 'admin123'
            })
        });
        
        if (loginResponse.ok) {
            const loginData = await loginResponse.json();
            token = loginData.token;
            console.log('✅ Admin login successful');
            console.log('   Token:', token.substring(0, 20) + '...');
        } else {
            console.log('❌ Admin login failed');
            return;
        }
        
        // 3. Test Rooms API
        console.log('\n3. 🏨 Testing Rooms API...');
        const roomsResponse = await fetch(`${API_URL}/rooms`);
        if (roomsResponse.ok) {
            const rooms = await roomsResponse.json();
            console.log(`✅ Rooms API working: ${rooms.length} rooms found`);
            if (rooms.length > 0) {
                console.log('   Sample room:', rooms[0].roomNumber, '-', rooms[0].type);
            }
        } else {
            console.log('❌ Rooms API failed');
        }
        
        // 4. Test Features API
        console.log('\n4. 🏷️ Testing Room Features API...');
        const featuresResponse = await fetch(`${API_URL}/features`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (featuresResponse.ok) {
            const features = await featuresResponse.json();
            console.log(`✅ Features API working: ${features.length} features found`);
        } else {
            console.log('❌ Features API failed');
        }
        
        // 5. Test Creating a Feature
        console.log('\n5. ➕ Testing Feature Creation...');
        const newFeature = {
            name: 'Test WiFi Plus',
            icon: '📶',
            description: 'Enhanced WiFi connectivity for testing'
        };
        
        const createFeatureResponse = await fetch(`${API_URL}/features`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newFeature)
        });
        
        if (createFeatureResponse.ok) {
            const createdFeature = await createFeatureResponse.json();
            console.log('✅ Feature created successfully:', createdFeature.name);
            
            // 6. Test Feature Update
            console.log('\n6. ✏️ Testing Feature Update...');
            const updateResponse = await fetch(`${API_URL}/features/${createdFeature._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    name: 'Updated WiFi Plus',
                    isActive: false 
                })
            });
            
            if (updateResponse.ok) {
                console.log('✅ Feature updated successfully');
            } else {
                console.log('❌ Feature update failed');
            }
            
            // 7. Test Feature Deletion
            console.log('\n7. 🗑️ Testing Feature Deletion...');
            const deleteResponse = await fetch(`${API_URL}/features/${createdFeature._id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (deleteResponse.ok) {
                console.log('✅ Feature deleted successfully');
            } else {
                console.log('❌ Feature deletion failed');
            }
        } else {
            console.log('❌ Feature creation failed');
        }
        
        // 8. Test Bookings API
        console.log('\n8. 📅 Testing Bookings API...');
        const bookingsResponse = await fetch(`${API_URL}/bookings`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (bookingsResponse.ok) {
            const bookings = await bookingsResponse.json();
            console.log(`✅ Bookings API working: ${bookings.length} bookings found`);
        } else {
            console.log('❌ Bookings API failed');
        }
        
        console.log('\n==================================================');
        console.log('🎉 COMPLETE SYSTEM TEST FINISHED!');
        console.log('==================================================');
        console.log('\n📍 All localhost links are ready:');
        console.log('🏠 Homepage: http://localhost:5000/index.html');
        console.log('👨‍💼 Admin Dashboard: http://localhost:5000/admin/admin-dashboard.html');
        console.log('🏨 Rooms Page: http://localhost:5000/pages/rooms.html');
        console.log('🧪 Features Test: http://localhost:5000/admin/features-test.html');
        console.log('➕ Add Room: http://localhost:5000/admin/add-room.html');
        console.log('\n🔑 Admin Credentials:');
        console.log('📧 Email: admin@hotel.com');
        console.log('🔒 Password: admin123');
        
    } catch (error) {
        console.error('\n❌ Test failed with error:', error.message);
    }
}

// Run the complete test
runCompleteTest();