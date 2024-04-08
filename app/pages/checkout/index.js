import React, { useState } from 'react'
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import Profile from '../../shared/Profile'

const CheckoutPage = () => {
  const title = 'سلة التسوق'
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 20,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 30,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 25,
      image: 'https://via.placeholder.com/80',
    },
  ])

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [shippingAddress, setShippingAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const getTotalAmount = () => {
    return products.reduce((total, product) => total + product.price, 0)
  }

  const handlePayNow = () => {
    setShowModal(true)
  }

  const handleConfirmPayment = async () => {
    try {
      const response = await fetch(
        'http://your-server-ip-address:3000/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            telephone: phone,
            email,
            shippingAddress,
            notes,
          }),
        }
      )

      if (response.ok) {
        console.log('Email sent successfully')
      } else {
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending request:', error)
    }

    setShowModal(false)
  }

  return (
    <View style={styles.container}>
      <Profile title={title} />
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <View
            key={product.id}
            style={styles.productItem}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(product.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>
          Total Amount: ${getTotalAmount()}
        </Text>
        <TouchableOpacity
          style={styles.payNowButton}
          onPress={handlePayNow}
        >
          <Text style={styles.payNowButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showModal}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Payment Information</Text>
          <TextInput
            style={styles.input}
            placeholder='Name'
            value={name}
            onChangeText={setName}
            required
          />
          <TextInput
            style={styles.input}
            placeholder='Shipping Address'
            value={shippingAddress}
            onChangeText={setShippingAddress}
            required
          />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            value={phone}
            onChangeText={setPhone}
            required
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            required
          />
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder='Notes'
            multiline
            value={notes}
            onChangeText={setNotes}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmPayment}
          >
            <Text style={styles.confirmButtonText}>Confirm Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.closeModalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productList: {
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productDescription: {
    fontSize: 14,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
  totalAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalAmountText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  payNowButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  payNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  notesInput: {
    height: 100,
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeModalButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  closeModalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default CheckoutPage
